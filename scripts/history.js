/*
 *  Author: Saud Kadiri @ Group 5
 *
 *  Changelog:
 *   Date           Version     Changed by      Change Description
 *   2021-09-14     1.0         Saud Kadiri     Added Event Listener
 *   2021-09-15     1.0         Saud Kadiri     Syntax Improvement and some minor improvements
 *   2021-09-16     1.0         Saud Kadiri     get_duration() added and thus now results are sorted as per:
 *                                              minutes, day, week, month.
 *
 *  Source: https://developer.chrome.com/docs/extensions/reference/
 *          https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/mv2-archive/api/history/showHistory/
 */

/**
 *  Tasks:
 *      1. Get the period as specified by the user and thus call get_duration() function to get "epoch".
 *      2. Use Chromr API to get the history.
 */
function get_history() {
    try {
        let period = document.querySelector('input[name="period"]:checked');
        var since = get_duration(period.value);
    } catch (error) {
        alert('No value selected!\nPress "esc" key and then enter a valid choice.');
        return;
    }
    /***
     * Chrome history API (ONLY for web extensions) for Chromium powered browsers
     * however be converted into a Safari extension or Firefox add-on to work on them
     * Syntax: chrome.history.search({text:'', startTime: epoch, endTime: to, maxResults: result_count});
     */
    
    chrome.history.search({ text: '', startTime: since }, (data) => {
        calculate_sentiments(data);
    });
}

/**
 * Converts the given priod into micro
 * @param {string} duration 
 * @returns {number} from_epoch (in microseconds)
 */
let get_duration = (duration) => {
    let from_epoch = 0;
    switch (duration) {
        case "minutes":
            let minutes = document.getElementById('minutes').value;
            //          current time      - period in microseconds
            from_epoch = (new Date()).getTime() - minutes * 60 * 1000;
            break;
        case "today":
            //                      current epoch - 1000 * 60 * 60 *   hours passed today
            from_epoch = (new Date()).getTime() - 1000 * 60 * 60 * (new Date()).getHours();
            break;
        case "week":
            //                  current epoch     - 1000 * 60 * 60 * 24 * week days passed in the week
            from_epoch = (new Date()).getTime() - 1000 * 60 * 60 * 24 * (new Date()).getDay();
            break;
        case "month":
            //                  current epoch     - 1000 * 60 * 60 * 24 *  days passed in the month
            from_epoch = (new Date()).getTime() - 1000 * 60 * 60 * 24 * (new Date()).getDate();
            break;
        default:
            break;
    }
    return from_epoch;
}