const goals = [
    {
        name: 'Learn HTML',
        date: '2025-06-01',
    },
    {
        name: 'Learn CSS',
        date: '2025-07-01',
    },
    {
        name: 'Learn JavaScript',
        date: '2025-08-01',
    },
]


// const goalsElement = goals.map((goal) => {
//     return `
//         <div class="goal">
//             <p class="goal_name">🎯 ${goal.name}</p>
//             <span class="goal_date">📆 ${goal.date}</span>
//         </div>
//     `;
// }).join('');

// document.querySelector('.goals').innerHTML = goalsElement

function renderGoal(goal){
    return `
        <div class="goal">
            <p class="goal_name">🎯 ${goal.name}</p>
            <span class="goal_date">📆 ${new Date(goal.date).toLocaleDateString()}</span>
        </div>
    `;
}
const rendGoals = goals.map(renderGoal).join('');


const goalsEl = document.querySelector('.goals');
goalsEl.innerHTML = rendGoals;



