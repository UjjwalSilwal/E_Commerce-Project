import {useState} from 'react'
import { toast } from 'react-toastify'
import {
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useFetchCategoriesQuery
} from '../../redux/api/categoryApiSlice'

const CategoryList = () => {
    const {data : categories} =  useFetchCategoriesQuery()
    const {name, setName} = useState('')
    const [selectedCategory, setselectedCategory] = useState(null)
    const [updateName, setUpdateName] = useState('')
    const [modelVisible, setModelVisible] = useState(false)
        
    const [createCategory] = useCreateCategoryMutation()
    const [updateCategory] = useUpdateCategoryMutation()
    const [deleteCategory] = useDeleteCategoryMutation()

  return (
    <div className='ml-[10rem] flex flex-col md:flex-row'>
        {/* <Admin menu /> */}

    </div>
  )
}

export default CategoryList