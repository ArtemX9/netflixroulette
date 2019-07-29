export const yearFromDate = {
  filters: {
    yearFromDate(value) {
      return new Date(value).getFullYear();
    }
  }
};
