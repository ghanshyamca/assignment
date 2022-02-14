type T = {
  name: string;
  image: string;
  description: string;
  dateLastEdited: string;
};

type result = {
  result: T[];
  count: number;
};

type query = {
  text: string;
  sortby: any;
  orderby: string;
  skip: string;
  limit: string;
};
