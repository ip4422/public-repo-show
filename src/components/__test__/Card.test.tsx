import { render, screen , waitFor} from '@testing-library/react'

import { RepoCard } from '../RepoCard'

it('should render Empty Card component', async () => {
    const props = {
        title: 'example title',
        description: 'just description'
    }
    await waitFor(()=> render(<RepoCard {...props} />))
    const linkElement = screen.getByRole('link', {name:/example title/i})
    linkElement.toBeInTheDocument()
});