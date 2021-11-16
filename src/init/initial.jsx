let itemList = [
    {
        id: 1,
        title: 'твоя первая задача',
        description: 'ты должен сделать это',
        createdAt: new Date().toLocaleString(),
        deadlineAt: new Date(2021, 11, 15).toLocaleString(),
        finishedAt: null,
        updatedAt: new Date().toLocaleString()
    },
    {
        id: 2,
        title: 'А это ты уже выполнил',
        description: 'Не нужно ничего делать, отдыхай',
        createdAt: new Date().toLocaleString(),
        deadlineAt: new Date(2021, 11, 15).toLocaleString(),
        finishedAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
    }
];

const getItemList = () => {
    return itemList.slice();
}
const replaceItem = (item, index) => {

    itemList[index] = item;
}
const addItem = (item) => {

    itemList.push(item);
}

const ItemService = {
    getItemList: getItemList,
    replaceItem: replaceItem,
    addItem: addItem
}

export default ItemService;
