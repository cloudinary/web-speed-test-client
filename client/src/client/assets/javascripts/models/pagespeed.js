type PagespeedById = {
  id?: number,
  name: string
};

// This is the model of our module state
export type State = {
  pagespeed: number[],
  pagespeedById: Array<PagespeedById>
};
