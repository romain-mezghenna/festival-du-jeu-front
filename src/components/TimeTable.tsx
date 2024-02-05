import React, {useEffect,useState} from "react";
import { sendRequest } from "../utils/sendRequest";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
// axios
import axios from 'axios';

type PlageHoraire = {
  idPlage: number;
  heureDebut: string; // Format "hh:mm:ss"
  heureFin: string; // Format "hh:mm:ss"
  jour: string;
  idFestival: number;
};

type Poste = {
  idPoste: number;
  nom: string;
  details: string;
  pseudoReferent: string;
};

type Zone = {
  idZone: number;
  nom: string;
  idFestival: number;
  idPoste: number;
};

// Définition du type pour les créneaux de poste et de zone
type Creneau = {
  idCreneau: number;
  plageHoraire: number; // idPlage
  nombreMax: number;
  idPoste?: number;     // Optionnel, présent uniquement pour les créneaux de poste
  idZone?: number;      // Optionnel, présent uniquement pour les créneaux de zone
};

type TableCellComponentProps = {
  content: string; // Contenu de la cellule, par exemple le nom du poste ou de la zone
};

const TableCellComponent: React.FC<TableCellComponentProps> = ({ content }) => {
  return <div>{content}</div>;
};


interface TimeTableProps {
    idFestival:number;
    cellComponentType: string;
}

const formatTimeRange = (heureDebut: string, heureFin: string) => {
  // Enlève les secondes et renvoie la chaîne formatée "hh:mm-hh:mm"
  return `${heureDebut.slice(0, -3)}-${heureFin.slice(0, -3)}`;
};

function TimeTable(props :TimeTableProps){
  const user = useSelector((state: RootState) => state.user);
  const [creneauxPoste, setCreneauxPoste] = useState<Creneau[]>([]);
  const [creneauxZone, setCreneauxZone] = useState<Creneau[]>([]);
  const [rows, setRows] = useState<(Poste | Zone)[]>([]);
  const [columns, setColumns] = useState<PlageHoraire[]>([]);
  const [jours, setJours] = useState<string[]>([]);
  const [loading , setLoading] = useState(true);

  // Ajoutez un état pour gérer le jour sélectionné
  const [selectedDay, setSelectedDay] = useState<string>("");

  // Mettre à jour l'état lorsqu'un jour est sélectionné
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value.split("T")[0]);
  };

  // Filtrez les colonnes (plages horaires) en fonction du jour sélectionné
  const filteredColumns = columns.filter((column) =>
    selectedDay ? column.jour.split("T")[0] === selectedDay : false
  );

  useEffect(() => {
    // TODO: Remplacer par des appels API réels pour récupérer les créneaux
    const fetchData = async () => {
      // Simuler une réponse de l'API
      const simulatedResponsePoste = [
        { idCreneau: 1, plageHoraire: 1, nombreMax: 10, idPoste: 1 },
        // ... autres créneaux de poste ...
      ];
      const simulatedResponseZone = [
        { idCreneau: 1, plageHoraire: 1, nombreMax: 5, idZone: 101 },
        // ... autres créneaux de zone ...
      ];
      setCreneauxPoste(simulatedResponsePoste);
      setCreneauxZone(simulatedResponseZone);

      sendRequest(
        "postes/festival/" + 1,
        "GET",
        {},
        user.token ?? "",
        (err, res) => {
          if (err) {
            alert("Erreur lors de la récupération des postes");
            console.log(err);
          } else {
             setRows((prevRows) => {
               const updatedRows = [...prevRows];
               res.forEach((poste : any) => {
                 if (
                   !updatedRows.some((row) => row.idPoste === poste.idPoste)
                 ) {
                   updatedRows.push(poste.Poste);
                 }
               });
               return updatedRows;
             });
          }
        }
      );
      sendRequest(
        "plageshoraires/festival/" + 1,
        "GET",
        {},
        user.token ?? "",
        (err, res) => {
          if (err) {
            alert("Erreur lors de la récupération des plages horaires");
            console.log(err);
          } else {
            setColumns((prevColumns) => {
              const updatedColumns = [...prevColumns];
              res.forEach((plageHoraire : any) => {
                if (
                  !updatedColumns.some(
                    (column) => column.idPlage === plageHoraire.idPlage
                  )
                ) {
                  updatedColumns.push(plageHoraire);
                }
                console.log("plageHoraire",plageHoraire);
                const updatedJours = [...jours];
                if (!updatedJours.includes(plageHoraire.jour.split("T")[0])) {
                  updatedJours.push(plageHoraire.jour.split("T")[0]);
                }
                setJours(updatedJours);
              });
              return updatedColumns;
            
            })
          }
        }
      );
        setLoading(false);
    };
    if(loading){
        fetchData();
    } else {
    }

    
  }, [jours, loading, rows, columns, user.token]);
  return (
    <>
      {loading ? (
        <div>Chargement...</div>
      ) : (
        <div className="time-table-container">
          <div className="day-selector">
            <label htmlFor="day-select">Choisissez un jour :</label>
            <select
              id="day-select"
              onChange={handleDayChange}
              value={selectedDay}
            >
              <option value="">Tous les jours</option>
              {jours.length > 0 &&
                jours.map((jour) => (
                  <option key={jour} value={jour}>
                    {jour}
                  </option>
                ))}
            </select>
          </div>
          <table className="time-table">
            <thead>
              <tr>
                <th>Nom</th>
                {filteredColumns.map((column) => (
                  <th key={column.idPlage}>
                    {formatTimeRange(column.heureDebut, column.heureFin)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                // Uniquement les 5 premiers postes pour l'exemple
                rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.nom}</td>
                    {filteredColumns.map((column) => (
                      <td key={`${rowIndex}-${column.idPlage}`}>
                        {props.cellComponentType === "SAISIE" && (
                          <input
                            type="number"
                            className="input-number"
                            placeholder="Max"
                          />
                        )}
                        {props.cellComponentType === "INSCRIPTION" && (
                          <>
                            {creneauxPoste.find(
                              (c) =>
                                c.idPoste === row.idPoste &&
                                c.plageHoraire === column.idPlage
                            ) ? (
                              <div className="circle">
                                {" "}
                                {/* Contenu du cercle */}{" "}
                              </div>
                            ) : (
                              <div className="circle hidden"></div>
                            )}
                          </>
                        )}
                        {props.cellComponentType === "default" && (
                          <TableCellComponent content={row.nom} />
                        )}
                        {/* Ajoutez d'autres conditions pour d'autres types de cellules */}
                      </td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TimeTable;
