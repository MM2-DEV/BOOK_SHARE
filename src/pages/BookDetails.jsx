import React from "react";

const BookDetails = () => {
  return (
    <div className="mt-8">
      <div className="w-full shadow-xl p-20 rounded-md mx-auto bg-slate-100">
        <div className="flex flex-col justify-between items-center">
          <img
            src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_large_thumb_children-stories-book-cover-541__1_.jpg"
            alt="Book image"
            className="w-full"
          />
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="basis-1/4 bg-white">
            <h1 className="text-xl font-bold text-center">Summary</h1>
          </div>
          <div className="basis-3/4 bg-white p-4">
            <h1 className="text-center font-bold text-2xl">Title</h1>
            <h3  className="text-center font-bold text-xl">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              optio dolores, aperiam alias vero cum culpa, laborum quae cumque
              fugiat consequatur amet architecto facilis ea odio explicabo vitae
              magni, eligendi soluta? Culpa a veniam, repellat cupiditate neque
              sit iusto, cum deleniti odit nemo vel debitis fuga dolorum, dolore
              perspiciatis? Dolor suscipit aliquid sint, optio explicabo
              eligendi perspiciatis laudantium quas pariatur odio iste, itaque
              cupiditate ipsam totam. Corporis, voluptatum velit, consequuntur
              itaque adipisci id laboriosam dolorum animi expedita molestias
              voluptas repellat magnam facilis? Praesentium distinctio sapiente
              dolorum placeat, perspiciatis quidem ratione numquam molestias
              doloribus atque ab, eveniet explicabo culpa. Necessitatibus, quas!
            </p>
           <div className="mt-8">
            <label className="text-xl">Review</label>
           <textarea name="" id="" cols="30" rows="5" className="w-full border rounded-lg mt-2 bg-slate-300">
                
                </textarea>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
