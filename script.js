let skills = [['HTML', 'CSS', 'javaScript'], 
['Java', 'Java Advance'], 
['Blender', 'Video Editing'], 
['C', 'C++'], 
['Ms Word', 'Ms Excel', 'Power Point']];

const loadSkills = () => {
    let skillSections = document.querySelectorAll('.skills');

    skills.forEach(skill => {

        skillSections.forEach(skillSection => {
            
        let skillField = document.createElement('p');
        skillField.innerText = skill;
        skillSection.append(skillField);

        })
    })
}
loadSkills();
