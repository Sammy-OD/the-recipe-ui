import Link from 'next/link';

const Nav = () => {
  return (
    <div className='nav'>
      <p className='logo'>theRecipe</p>
      <Link href='/'>Home</Link>
    </div>
  )
}

export default Nav