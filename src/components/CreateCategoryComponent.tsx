import { TextField } from "@mui/material"
import { useCategory } from "../hooks/useCategory"

import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

interface Props {
  onCreate: () => void
}

const CreateCategoryComponent: React.FC<Props> = ({ onCreate }) => {

  const { createCategory } = useCategory()

  const [category, setCategory] = useState("")

  const createCategoryMutation = createCategory()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!category) return 

    createCategoryMutation.mutate({ name: category }, {
      onSuccess: (data) => {
        setCategory("")
        onCreate()
      },
      onError: (err) => {
        console.log({ err });
      },
    })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="align-items-center d-flex">
        <TextField variant='outlined' name="category" id="category" value={category} onChange={onChange} placeholder='Category' className='mx-3' />
        <button type="submit">
          <AddIcon role="button"/>
        </button>
      </form>

    </div>
  )
}

export default CreateCategoryComponent