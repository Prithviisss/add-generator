import Title from "../components/Title";

const Generator=() => {
    return(
        <div className='min-h-screen text-white p-6 md:p-12 mt-28'>
<form className="max-w-4xl mx-auto mb-40" >
    <Title heading='Create in-Context Image' description='upload your model and product images to generate stunning short-form videos and social media posts' />

<div className="flex gap-20 max-sm:flex-col items-start justify-between" />

    <div>
        <p>
            left col
        </p>
        </div>
        <div>
        <p>
            right col
        </p>
    
</div>
</form>
        </div>
    )
}
export default Generator;