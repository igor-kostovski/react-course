import React from 'react'

function Card({username = 'HC', post = 'Staff engineer'}) {
    // console.log(props)

    return (
        <figure className="md:fbg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18037931/pexels-photo-18037931/free-photo-of-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width="384" height="512" />
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, modi!
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {username}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card