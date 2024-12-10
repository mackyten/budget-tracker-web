export function formatDate(date: Date | string, locale: string = "en-US"): string {
    // Convert string to Date if necessary
    const parsedDate = new Date(date);
  
    // Check if the parsed date is valid
    if (isNaN(parsedDate.getTime())) {
      console.error("Invalid date:", date);
      return "Invalid Date"; // Return a fallback message or handle it differently
    }
  
    return parsedDate.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",  // Abbreviated month (e.g., Jan, Feb, etc.)
      day: "numeric"
    });
  }