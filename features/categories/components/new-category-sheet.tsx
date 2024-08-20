import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetHeader
} from "@/components/ui/sheet"
import { CategoryForm } from "@/features/categories/components/category-form";
import { useNewCategory } from "@/features/categories/hooks/use-new-categories";
import { useCreateCategory } from "@/features/categories/api/use-create-category";

const formSchema = insertCategorySchema.pick({
    name: true,
})

type FormValues = z.infer<typeof formSchema>

export const NewCategorySheet = () => {
    const { isOpen, onClose } = useNewCategory();

    const mutation = useCreateCategory()

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose()
            }
        });
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>New Category</SheetTitle>
                    <SheetDescription>
                        Create a new category to track your transaction.
                    </SheetDescription>
                </SheetHeader>
            <CategoryForm
                onSubmit={onSubmit}
                disabled={mutation.isPending}
                defaultValues={{ name: "" }}
            />
            </SheetContent>
        </Sheet>
    )
}
