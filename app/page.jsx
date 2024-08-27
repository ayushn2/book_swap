

export default function Home() {
  return (
      <section className='flex w-full flex-center justify-center items-center flex-col'>
    <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-secondary sm:text-6xl text-center'>
        Discover & Share
        <br className='max-md:hidden'/>
        <span className='text-secondary-foreground'> All of the best Reads</span>
    </h1>
    <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center'>
        Book swap is a book exchange platform where users can share and find the books they like.
    </p>
    {/* Feed  */}
    <Feed/>
   </section>
    
  );
}
