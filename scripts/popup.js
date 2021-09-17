/*
 *  Author: Saud Kadiri @ Group 5
 *
 *  Changelog:
 *   Date           Version     Changed by      Change Description
 *   2021-09-17     1.0         Saud Kadiri     Created the file for modularity purpose
 *
 *
 *  Source: https://stackoverflow.com/questions/13591983/onclick-or-inline-script-isnt-working-in-extension
 */

// As extensions are required to have event listners.
document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', get_history);
    // get_history() -> calculate_sentiments() -> plot_chart()
});