import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl , FormField, FormItem } from '@/components/ui/form'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

interface CategorySelectorProps {
  handleNavigate: (a: CategoryFormData) => void;
}

const categorySchema = z.object({
  category: z
    .string({
      required_error: "Selecione uma categoria",
    })
    .min(1, { message: "Selecione uma categoria" }),
  difficulty: z
    .string({
      required_error: "Selecione uma dificuldade",
    })
    .min(1, { message: "Selecione uma dificuldade" }),
});

type CategoryFormData = z.infer<typeof categorySchema>;

export function CategorySelector({ handleNavigate }: CategorySelectorProps) {
  const form = useForm<CategoryFormData>({resolver: zodResolver(categorySchema)});

  function onSubmit(data: CategoryFormData) {
    handleNavigate(data)
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10 w-full">
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-3/5">
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="history">História</SelectItem>
                    <SelectItem value="science">Ciências</SelectItem>
                    <SelectItem value="technology">Tecnologia</SelectItem>
                    <SelectItem value="general">
                      Conhecimentos Gerais
                    </SelectItem>
                    <SelectItem value="pop">Cultura pop</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.category && (
                  <span className="text-sm mt-2 text-red-400">
                    {form.formState.errors.category.message}
                  </span>
                )}
              </FormItem>
              
            )}
          />
          <FormField 
            name="difficulty"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-3/5">
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Dificuldade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="easy">Fácil</SelectItem>
                    <SelectItem value="medium">Médio</SelectItem>
                    <SelectItem value="hard">Difícil</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.difficulty && (
                <span className="text-sm mt-2 text-red-400">
                  {form.formState.errors.difficulty.message}
                </span>
                )}
              </FormItem>
            )}
          />
        </div>
        <Button 
          className="bg-indigo-500 self-center w-1/2" 
          type="submit"
        >
          Iniciar
        </Button>
      </form>
    </Form>
  );
}


      
      
