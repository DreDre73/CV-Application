import { useState } from 'react'
import '../../styles/FormCard.css'

function WorkExperience({
  workExperienceItems,
  setWorkExperienceItems,
}) {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)

  const [workExperienceDraft, setWorkExperienceDraft] = useState({
    company: '',
    position: '',
    jobDescription: '',
    startDate: '',
    endDate: '',
  })

  function handleAdd() {
    setWorkExperienceDraft({
      company: '',
      position: '',
      jobDescription: '',
      startDate: '',
      endDate: '',
    })

    setIsAdding(true)
    setIsEditing(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const workItemCopy = [...workExperienceItems]

    if (isEditing) {
      workItemCopy[editingIndex] = workExperienceDraft
      setEditingIndex(null)
      setIsEditing(false)
    } else {
      workItemCopy.push(workExperienceDraft)
      setIsAdding(false)
    }

    setWorkExperienceItems(workItemCopy)

    setWorkExperienceDraft({
      company: '',
      position: '',
      jobDescription: '',
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

    setWorkExperienceDraft((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  function handleDelete(index) {
    const newWorkList = workExperienceItems.filter(
      (_, i) => i !== index
    )

    setWorkExperienceItems(newWorkList)
  }

  function handleEdit(index) {
    const itemToEdit = workExperienceItems[index]

    setIsEditing(true)
    setIsAdding(false)
    setEditingIndex(index)
    setWorkExperienceDraft(itemToEdit)
  }

  return (
    <div
      className="basic-info-container"
      id="work-experience-card"
    >
      <div className="title-container">
        <h2>Work Experience</h2>
      </div>

      {!isAdding && !isEditing && (
        <button onClick={handleAdd} className='add-btn'>Add</button>
      )}

      {(isAdding || isEditing) && (
        <form>
          <div className="input-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={workExperienceDraft.company}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={workExperienceDraft.position}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>Job Description</label>
            <textarea
              name="jobDescription"
              value={workExperienceDraft.jobDescription}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={workExperienceDraft.startDate}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={workExperienceDraft.endDate}
              onChange={handleDraftChange}
            />
          </div>

          <div className="form-button-group">
              <button onClick={handleSubmit} className='submit-btn'>Submit</button>
              <button onClick={handleCancel} className='cancel-btn'>Cancel</button>
          </div>
        </form>
      )}

      <div className="item-list">
        {workExperienceItems.map((item, index) => (
          <div
            key={index}
            className="item-row"
          >
            <p>{item.company}</p>

            {!isEditing && (
              <div className='button-container'>
                <button onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
