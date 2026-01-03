import '../../styles/FormCard.css'
import { useState } from 'react'

function Skills({
    skillItems, 
    setSkillItems, 
}) {

    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null)

    const [skillDraft, setSkillDraft] = useState({
        skill: '',
      })

      function handleAdd() {
        setSkillDraft({
          skill: '',
        })
    
        setIsAdding(true)
        setIsEditing(false)
      }

      function handleSubmit(event) {
        event.preventDefault()
    
        const skillItemCopy = [...skillItems]
    
        if (isEditing) {
          skillItemCopy[editingIndex] = skillDraft
          setEditingIndex(null)
          setIsEditing(false)
        } else {
          skillItemCopy.push(skillDraft)
          setIsAdding(false)
        }
    
        setSkillItems(skillItemCopy)
    
        setSkillDraft({
          skill: '',
        })
      }

      function handleCancel() {
        setIsAdding(false)
        setIsEditing(false)
        setEditingIndex(null)
      }

      function handleDraftChange(event) {
        const field = event.target.name
        const value = event.target.value
    
        setSkillDraft((prev) => ({
          ...prev,
          [field]: value,
        }))
      }

      function handleDelete(index) {
        const newSkillList = skillItems.filter(
          (_, i) => i !== index
        )
    
        setSkillItems(newSkillList)
      }

      function handleEdit(index) {
        const itemToEdit = skillItems[index]
    
        setIsEditing(true)
        setIsAdding(false)
        setEditingIndex(index)
        setSkillDraft(itemToEdit)
      }

    




    return (
        <div className='basic-info-container' id='skill-card'>

            <div className="title-container">
                <h2>Add Skills</h2>
            </div>

            {(!isAdding && !isEditing) && (
                <button onClick={handleAdd}>Add</button>
            )}

            {(isAdding || isEditing) && (
            <form>
                <div className="input-group">
                    <label>Skill</label>
                    <input
                        type="text"
                        name="skill"
                        value={skillDraft.skill}
                        onChange={handleDraftChange}
                    />
                </div>

                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        )}

            <div className="item-list">
                    {skillItems.map((item, index) => (
                    <div key={index} className="item-row">
                        <p>{item.skill}</p>
                        {!isEditing && (
                        <>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </>
                        )}
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default Skills
