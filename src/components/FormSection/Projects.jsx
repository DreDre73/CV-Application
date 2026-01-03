import { useState } from 'react'
import '../../styles/FormCard.css'

function Projects({ projectItems, setProjectItems }) {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)

  const [projectDraft, setProjectDraft] = useState({
    projectTitle: '',
    projectDescription: '',
  })

  function handleAdd() {
    setProjectDraft({
      projectTitle: '',
      projectDescription: '',
    })

    setIsAdding(true)
    setIsEditing(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const projectItemCopy = [...projectItems]

    if (isEditing) {
      projectItemCopy[editingIndex] = projectDraft
      setEditingIndex(null)
      setIsEditing(false)
    } else {
      projectItemCopy.push(projectDraft)
      setIsAdding(false)
    }

    setProjectItems(projectItemCopy)

    setProjectDraft({
      projectTitle: '',
      projectDescription: '',
    })
  }

  function handleCancel() {
    setIsAdding(false)
    setIsEditing(false)
    setEditingIndex(null)
  }

  function handleDraftChange(event) {
    const { name, value } = event.target

    setProjectDraft((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleDelete(index) {
    const newProjectList = projectItems.filter((_, i) => i !== index)
    setProjectItems(newProjectList)
  }

  function handleEdit(index) {
    const itemToEdit = projectItems[index]

    setIsEditing(true)
    setIsAdding(false)
    setEditingIndex(index)
    setProjectDraft(itemToEdit)
  }

  return (
    <div className="basic-info-container" id="project-card">
      <div className="title-container">
        <h2>Projects</h2>
      </div>

      {!isAdding && !isEditing && (
        <button onClick={handleAdd}>Add</button>
      )}

      {(isAdding || isEditing) && (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Project Title</label>
            <input
              type="text"
              name="projectTitle"
              value={projectDraft.projectTitle}
              onChange={handleDraftChange}
            />
          </div>

          <div className="input-group">
            <label>Project Description</label>
            <textarea
              name="projectDescription"
              value={projectDraft.projectDescription}
              onChange={handleDraftChange}
            />
          </div>

          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}

      <div className="item-list">
        {projectItems.map((item, index) => (
          <div key={index} className="item-row">
            <p>{item.projectTitle}</p>

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

export default Projects
