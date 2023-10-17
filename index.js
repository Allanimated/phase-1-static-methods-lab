class Formatter {
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize (string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, "");
  }
  static titleize (string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const exceptionsSet = new Set(exceptions);
    const title = string.split(" ").map((word,index) => {
      if (exceptionsSet.has(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase();
      } return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");

    return title;

  }
}