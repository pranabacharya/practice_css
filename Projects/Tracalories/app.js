// Storage Controller

// Item Controller
const ItemCntrl = (function () {
    const Item = function (id, name, calorie) {
        this.id = id;
        this.name = name;
        this.calorie = calorie;
    }
    const data = {
        item: [
            { id: 0, name: 'Rice', calorie: 650 },
            { id: 1, name: 'Dal', calorie: 250 },
            { id: 2, name: 'Pickle', calorie: 150 },
            { id: 3, name: 'Sabji', calorie: 350 },
        ],
        currentItem: null,
        totalCalorie: 0
    }

    return {
        logData: function () {
            return data;
        },
        getItem: function () {
            return data.item;
        },
        addItem: function (name, calorie) {
            let ID;
            if (data.item.length > 0) {
                ID = data.item[data.item.length - 1].id + 1;
            } else {
                ID = 0
            }
            calorie = parseInt(calorie);

            const newItem = new Item(ID, name, calorie);
            data.item.push(newItem);

            return newItem;
        },
        showTotalCalories: function(){
            let total = 0;
            data.item.forEach((item) => {
                total += item.calorie;
            })
            data.totalCalorie = total ;

            return data.totalCalorie
        }
    }
})()

// UI Controller

const UICntrl = (function () {
    const UISelectors = {
        itemList: '#collection-item',
        nameInput: '#meal',
        calorieInput: '#calorie',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        totalCalorie: '.total-calories'
    }

    return {
        getSelectors: function () {
            return UISelectors;
        },
        populateItem: function (item) {
            let output = '';
            item.forEach((item) => {
                output += `<li class="list-group-item" id="item-${item.id}"><b>${item.name}</b> : <em>${item.calorie} Calories</em> <a href="#"><i class="edit-item fa fa-pencil float-right"></i></a></li>`;
            })
            document.querySelector(UISelectors.itemList).innerHTML = output;
        },
        getItemsFromInputs: function () {
            return {
                name: document.querySelector(UISelectors.nameInput).value,
                calorie: document.querySelector(UISelectors.calorieInput).value
            }
        },
        showNewItem: function (item) {
            const li = document.createElement('li');
            li.id = `item-${item.id}`;
            li.className = `list-group-item`;
            li.innerHTML = `<b>${item.name}</b> : <em>${item.calorie} Calories</em> <a href="#"><i class="edit-item fa fa-pencil float-right"></i></a>`;
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        showTotalCalories: function(totalCalorie) {
            document.querySelector(UISelectors.totalCalorie).textContent = totalCalorie;
        },
        hideButtons: function () {
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
        },
        showButtons: function () {
            document.querySelector(UISelectors.addBtn).style.display = 'none';
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
        },
        clearInputs: function () {
            document.querySelector(UISelectors.nameInput).value = '';
            document.querySelector(UISelectors.calorieInput).value = '';
        }
    }
})()

// App Controller
const AppCntrl = (function (ItemCntrl, UICntrl) {

    const loadEventListners = function () {
        const UISelectors = UICntrl.getSelectors();
        document.querySelector(UISelectors.addBtn).addEventListener('click', getItemFromUI);

        document.querySelector(UISelectors.itemList).addEventListener('click', editState);

        document.querySelector(UISelectors.updateBtn).addEventListener('click',updateItemState);

        document.querySelector(UISelectors.backBtn).addEventListener('click', backFromEditState);
    }

    const getItemFromUI = function () {
        const input = UICntrl.getItemsFromInputs();
        if (input.name !== '' && input.calorie !== '') {
            const newItem = ItemCntrl.addItem(input.name, input.calorie);
            UICntrl.showNewItem(newItem);
            UICntrl.clearInputs();
            const totalCalories = ItemCntrl.showTotalCalories();
            UICntrl.showTotalCalories(totalCalories);
        }
    }
    const editState = function (e) {
        if (e.target.classList.contains('edit-item')) {
            UICntrl.showButtons();
        }
    }
    const backFromEditState = function () {
        UICntrl.hideButtons();
        UICntrl.clearInputs();
    }
    const updateItemState = function(){
        UICntrl.showValue();
    }



    return {
        init: function () {
            const item = ItemCntrl.getItem();
            UICntrl.populateItem(item);
            UICntrl.hideButtons();
            UICntrl.clearInputs();

            const totalCalories = ItemCntrl.showTotalCalories();
            UICntrl.showTotalCalories(totalCalories);


            loadEventListners();
        }
    }
})(ItemCntrl, UICntrl)

AppCntrl.init();