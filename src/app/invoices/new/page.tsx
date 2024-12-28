"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/actions";
import SubmitButton from "@/components/SubmitButton";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-center h-full  gap-6 my-12">
      <div className=" flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoices</h1>
      </div>

      <form action={createAction} className="grid gap-4 max-w-xs">
        <div>
          <Label htmlFor="name" className="block mb-2 font-semibold text-sm ">
            Billing Name
          </Label>
          <Input name="name" id="name" type="text" required />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-sm ">
            Billing Email
          </Label>
          <Input name="email" id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="value" className="block mb-2 font-semibold text-sm ">
            Value
          </Label>
          <Input name="value" id="value" type="text" required />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block mb-2 font-semibold text-sm "
          >
            Description
          </Label>
          <Textarea id="description" name="description" required />
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </main>
  );
}
