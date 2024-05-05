import { reactive } from 'vue'

export const ColorStore = reactive({
    data: {
        'list1': [
            {'name': 'item1', 'color': '#0082ff', 'number': 1, 'checked': true},
            {'name': 'item2', 'color': '#a2ff00', 'number': 1, 'checked': false},
            {'name': 'item3', 'color': '#ff0090', 'number': 1, 'checked': false},
            {'name': 'item4', 'color': '#ff7300', 'number': 1, 'checked': false},
        ],
        'list2': [
            {'name': 'item1', 'color': '#ff4400', 'number': 1, 'checked': true},
            {'name': 'item2', 'color': '#540c0c', 'number': 1, 'checked': false},
            {'name': 'item3', 'color': '#0082ff', 'number': 1, 'checked': false},
            {'name': 'item4', 'color': '#540c0c', 'number': 1, 'checked': true},
        ],
    },
    getData() {
        console.log(this.data);
    },
})