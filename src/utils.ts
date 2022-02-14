export const limit = (data, c) => {
  return data.filter((x, i) => {
    if (i <= c - 1) {
      return true;
    }
  });
};

export const skip = (data, c) => {
  return data.filter((x, i) => {
    if (i > c - 1) {
      return true;
    }
  });
};

export const search = (text, data) => {
  if (text && Array.isArray(text)) {
    return data.filter((e) => {
      let cond;
      text.map((element) => {
        const expression = `\\b${element}\\b`;
        if (
          e.name.match(new RegExp(expression, 'ig')) ||
          e.description.match(new RegExp(expression, 'ig'))
        ) {
          cond = true;
        } else {
          return (cond = false);
        }
      });
      return cond;
    });
  } else if (text) {
    return data.filter((e) => {
      const expression = `\\b${text}\\b`;
      if (
        e.name.match(new RegExp(expression, 'ig')) ||
        e.description.match(new RegExp(expression, 'ig'))
      ) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    return data;
  }
};

export const sort = (sortby, orderby, search) => {
  if (sortby && orderby == 'desc') {
    if (sortby == 'name') {
      return search.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sortby == 'dateLastEdited') {
      return search.sort((a, b) =>
        b.dateLastEdited.localeCompare(a.dateLastEdited),
      );
    }
  } else if (sortby) {
    if (sortby == 'name') {
      return search.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortby == 'dateLastEdited') {
      return search.sort((a, b) =>
        a.dateLastEdited.localeCompare(b.dateLastEdited),
      );
    }
  } else {
    return search;
  }
};

export const memo = {};
