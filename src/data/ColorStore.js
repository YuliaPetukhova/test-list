import {reactive} from 'vue'

export const ColorStore = reactive({
    data: {
        'list1': {
            'item1': {'itemName': 'item1', 'color': '#0082ff', 'count': 1, 'checked': true, 'listName': 'list1'},
            'item2': {'itemName': 'item2', 'color': '#a2ff00', 'count': 1, 'checked': false, 'listName': 'list1'},
            'item3': {'itemName': 'item3', 'color': '#ff0090', 'count': 1, 'checked': false, 'listName': 'list1'},
            'item4': {'itemName': 'item4', 'color': '#ff7300', 'count': 1, 'checked': false, 'listName': 'list1'},
        },
        'list2': {
            'item1': {'itemName': 'item1', 'color': '#ff4400', 'count': 1, 'checked': true, 'listName': 'list2'},
            'item2': {'itemName': 'item2', 'color': '#540c0c', 'count': 1, 'checked': false, 'listName': 'list2'},
            'item3': {'itemName': 'item3', 'color': '#0082ff', 'count': 1, 'checked': false, 'listName': 'list2'},
            'item4': {'itemName': 'item4', 'color': '#540c0c', 'count': 1, 'checked': true, 'listName': 'list2'},
        },
    },
})
