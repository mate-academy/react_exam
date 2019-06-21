export default function AuthorsReducer(state = [], { type, data }){
  if(type === 'updateAuthors') {
    let authors = data.map((item, index) => ({ id: index, name: item }));
    return authors;
  }

  if(type === 'updateAuthor') {
    let authors = state.map(item => {
      if(item.id === data.id) item.name = data.name;

      return { ...item };
    });
    return authors;
  }

  return [];
}