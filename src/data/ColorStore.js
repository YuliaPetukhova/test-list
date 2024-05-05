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
                {'itemName': 'item4', 'color': '#9900d0', 'count': 1, 'checked': true, 'listName': 'list2',},
            ]
        },
        {
            'name': 'list3',
            'checked': true,
            'items': [
                {'itemName': 'item1', 'color': '#0082ff', 'count': 1, 'checked': false, 'listName': 'list3',},
                {'itemName': 'item2', 'color': '#ff0090', 'count': 1, 'checked': true, 'listName': 'list3',},
                {'itemName': 'item3', 'color': '#13a3e2', 'count': 1, 'checked': true, 'listName': 'list3',},
                {'itemName': 'item4', 'color': '#9f00d0', 'count': 1, 'checked': true, 'listName': 'list3',},
            ]
        },
        {
            'name': 'list4',
            'checked': true,
            'items': [
                {'itemName': 'item1', 'color': '#0002ff', 'count': 1, 'checked': false, 'listName': 'list4',},
                {'itemName': 'item2', 'color': '#ff2090', 'count': 1, 'checked': true, 'listName': 'list4',},
                {'itemName': 'item3', 'color': '#93a9e9', 'count': 1, 'checked': true, 'listName': 'list4',},
                {'itemName': 'item4', 'color': '#ff00d0', 'count': 1, 'checked': true, 'listName': 'list4',},
            ]
        },
        {
            'name': 'list5',
            'checked': true,
            'items': [
                {'itemName': 'item1', 'color': '#0089ff', 'count': 1, 'checked': false, 'listName': 'list5',},
                {'itemName': 'item2', 'color': '#ff0050', 'count': 1, 'checked': true, 'listName': 'list5',},
                {'itemName': 'item3', 'color': '#13a3e2', 'count': 1, 'checked': true, 'listName': 'list5',},
                {'itemName': 'item4', 'color': '#ff88d0', 'count': 1, 'checked': true, 'listName': 'list5',},
            ]
        },
    ],
})
