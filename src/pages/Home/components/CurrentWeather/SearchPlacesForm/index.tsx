import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './styles.scss'

interface SearchPlacesFormProps {
  onFetchSearchPlaces: (query: string) => Promise<void>
}

const searchPlacesSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchPlacesSchema>

export function SearchPlacesForm({
  onFetchSearchPlaces,
}: SearchPlacesFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchPlacesSchema),
    defaultValues: {
      query: '',
    },
  })

  function handleSearchPlaces({ query }: SearchFormInput) {
    onFetchSearchPlaces(query)
  }
  return (
    <form className="search-places" onSubmit={handleSubmit(handleSearchPlaces)}>
      <input
        type="text"
        placeholder="Search for places"
        {...register('query')}
      />
      <p>{errors.query?.message}</p>
      <button type="submit">Search</button>
    </form>
  )
}
