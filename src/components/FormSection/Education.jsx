import { useState } from 'react'
import '../../styles/FormCard.css'

function Education({
  educationItems,
  setEducationItems
}) {
  
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)

  const [educationDraft, setEducationDraft] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
  })

  function handleAdd() {
    setEducationDraft({
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
    })

    setIsAdding(true)
    setIsEditing(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const educationItemCopy = [...educationItems]

    if (isEditing) {
      educationItemCopy[editingIndex] = educationDraft
      setEditingIndex(null)
      setIsEditing(false)
    } else {
      educationItemCopy.push(educationDraft)
      setIsAdding(false)
    }

    setEducationItems(educationItemCopy)

    setEducationDraft({
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
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

    setEducationDraft((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  function handleDelete(index) {
    const newEducationList = educationItems.filter(
      (_, i) => i !== index
    )

    setEducationItems(newEducationList)
  }

  function handleEdit(index) {
    const itemToEdit = educationItems[index]

    setIsEditing(true)
    setIsAdding(false)
    setEditingIndex(index)
    setEducationDraft(itemToEdit)
  }

  return (
    <div className="basic-info-container" id="education-card">
      <div className="title-container">
        <h2>Education</h2>
      </div>

      {(!isAdding && !isEditing) && (
      <button onClick={handleAdd}>Add</button>
      )}

      {(isAdding || isEditing) && (
        <form>
          <div className="input-group">
            <label>School Name</label>
            <input
              type="text"
              name="schoolName"
              value={educationDraft.schoolName}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>Degree</label>
            <input
              type="text"
              name="degree"
              value={educationDraft.degree}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={educationDraft.startDate}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={educationDraft.endDate}
              onChange={handleDraftChange}
            />
          </div>

          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      )}

      <div className="item-list">
        {educationItems.map((item, index) => (
          <div key={index} className="item-row">
            <p>{item.schoolName}</p>
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

export default Education

