import {reactive} from 'vue'

export const ColorStore = reactive({
    data: [
        {
            'name': 'list1',
            'checked': true,
            'items': [
                {'itemName': 'item1', 'color': '#540c0c', 'count': 1, 'checked': false, 'listName': 'list1',},
                {'itemName': 'item2', 'color': '#0082ff', 'count': 1, 'checked': true, 'listName': 'list1',},
                {'itemName': 'item3', 'color': '#ff4400', 'count': 1, 'checked': false, 'listName': 'list1',},
                {'itemName': 'item4', 'color': '#ff7300', 'count': 1, 'checked': true, 'listName': 'list1',},
            ]
        },
        {
            'name': 'list2',
            'checked': true,
            'items': [
                {'itemName': 'item1', 'color': '#0082ff', 'count': 1, 'checked': false, 'listName': 'list2',},
                {'itemName': 'item2', 'color': '#ff0090', 'count': 1, 'checked': true, 'listName': 'list2',},
                {'itemName': 'item3', 'color': '#13a3e2', 'count': 1, 'checked': true, 'listName': 'list2',},
                {'itemName': 'item4', 'color': '#ff00d0', 'count': 1, 'checked': true, 'listName': 'list2',},
            ]
        },
    ],
})
