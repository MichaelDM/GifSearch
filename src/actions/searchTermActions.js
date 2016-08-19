export function searchtermAction(term){
  console.log('action with',term);
  return {
    type: SEARCH_TERM,
    payload: term
  }
}
export const SEARCH_TERM = 'SEARCH_TERM';
