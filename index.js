
// uppercases the first letter in a String

class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9- ']/g, '');
  }

  static titleize(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word))
        return Formatter.capitalize(word);
      else
        return word;
    });

    return titleizedWords.join(' ');
  }

}