const Redux = require("@reduxjs/toolkit");

const store = Redux.createStore((state = 0, action) => {
  switch (action.type) {
    case "MAIS":
      return state + 1;
    case "MENOS":
      return state - 1;
    default:
      return state;
  }
});


store.subscribe(() => { // Executa sempre que o estado é alterado.
  console.log('Contador: ', store.getState());
});

store.dispatch({ // executa uma função
  type:'MAIS'
})