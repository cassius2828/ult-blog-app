import React from "react";
import Modal from "..";
import { useGlobalContext } from "../../../_context";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const WriteFormModal = () => {
  const { isWriteModalOpen, setIsWriteModalOpen } = useGlobalContext();
  const writeSchema = z.object({
    title: z.string().min(20, "Title must be at least 20 characters"),
    shortDescription: z
      .string()
      .min(60, "Description must be at least 60 characters"),
    blogBody: z
      .string()
      .min(100, "Blog content must be at least 100 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(writeSchema),
  });

  type WriteFormData = {
    title: string;
    shortDescription: string;
    blogBody: string;
  };
  const onSubmit = (data: WriteFormData) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen(false)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <input
          className="h-full w-full rounded-xl border-gray-300 p-2 outline-gray-400 focus:border-gray-600"
          {...register("title")}
          id="title"
          type="text"
          placeholder="Title here..."
        />
        <p>
          {errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
        </p>
        <input
          className="h-full w-full rounded-xl border-gray-300 p-2 outline-gray-400 focus:border-gray-600"
          {...register("shortDescription")}
          id="shortDescription"
          type="text"
          placeholder="Description here..."
        />
        <p>
          {errors.shortDescription && (
            <span className="text-sm text-red-500">
              {errors.shortDescription.message}
            </span>
          )}
        </p>

        <textarea
          className="h-full w-full rounded-xl border-gray-300 p-2 outline-gray-400 focus:border-gray-600"
          {...register("blogBody")}
          id="blogBody"
          rows={10}
          cols={10}
          placeholder="Main content here..."
        ></textarea>
        <p>
          {errors.blogBody && (
            <span className="text-sm text-red-500">
              {errors.blogBody.message}
            </span>
          )}
        </p>
        <div className="flex w-full justify-end pr-3 pt-2">
          <Button handleButtonClick={() => console.log("Publish")}>
            Publish
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default WriteFormModal;
