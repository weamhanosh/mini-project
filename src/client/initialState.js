const { /*List,*/ Map } = require('immutable');

export default {
    // file: Map({
    //     upload: false,
    //     done: false,
    // }),
    myEditor: Map({
        render_progress_bar: false,
        text: "",
        done: false,
        answer: {
            text: "",
            analysed_text_arr: []
        },
        line_length_arr: [],
        newline_counter: 0,
        options: [
            {label: 'adjective', value: 'adjective'},
            {label: 'verb', value: 'verb'},
            {label: 'תארים', value: 'תארים'}
        ],
        selected_options: [],
        failed: false
    })
    // app: Map({
    //   size: 200,
    //   tag: 'art',
    //   tags: List()
    // })
};
