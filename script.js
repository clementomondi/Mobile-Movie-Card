// Add JavaScript code here
const holder = document.querySelector('.holder-2');

const careers = ['Dominic Toretto and his team are requested by the', 'Agency to steal a computer chip during its transit', 'in Rome, Italy. Dom and his wife Letty', 'Ortiz stay behind with his son Brian', 'Little B Marcos, while the rest of', 'the team, consisting of Roman Pearce, Tej Parker,', 'Han Lue, and Ramsey, travels to Rome.'];

let CareerIndex = 0;

let characterIndex = 0;
UpdateText()

function UpdateText() {
    characterIndex++
    holder.innerHTML = `
<h1>${careers[CareerIndex].slice(0, 1) === 'I', ''} ${careers[CareerIndex].slice(0, characterIndex)}</h1>
`;
    if (characterIndex === careers[CareerIndex].length) {
        characterIndex = 0;
        CareerIndex++
    }
    setTimeout(UpdateText, 150);
}
