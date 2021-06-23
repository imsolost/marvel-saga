
const deck = [
  {
    id: 1,
    name: 'Werewolf',
    value: 1,
    aura: 'neutral',
    color: 'green',
    attr: 'strength'
  },
  {
    id: 2,
    name: 'Machine_Man',
    value: 2,
    aura: 'positive',
    color: 'red',
    attr: 'agility'
  },
  {
    id: 3,
    name: 'Luke_Cage',
    value: 3,
    aura: 'negative',
    color: 'blue',
    attr: 'intellect'
  },
  {
    id: 4,
    name: 'Sabra',
    value: 3,
    aura: 'neutral',
    color: 'purple',
    attr: 'willpower'
  },
  {
    id: 5,
    name: 'Nova',
    value: 4,
    aura: 'positive',
    color: 'black',
    attr: 'doom'
  }
]

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
}

const deckObj = convertArrayToObject(deck, 'name')

const initialData = {
  tasks: deckObj,
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: Object.keys(deckObj)
    }
  },
  columnOrder: ['column-1']
}

export default initialData