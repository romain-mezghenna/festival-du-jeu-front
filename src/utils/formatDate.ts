export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois commencent à partir de 0
    const year = date.getFullYear();
  
    // Ajoute un 0 devant le jour et le mois s'ils sont inférieurs à 10
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
}
