import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Logo } from "@/components/quiz/logo";

const contributeSchema = z.object({
  question: z.string({
    required_error: "Digite uma pergunta",
  }),
  correctAnswer: z.string({
    required_error: "Digite a resposta correta",
  }),
  wrongAnswer1: z.string({
    required_error: "Digite uma resposta incorreta",
  }),
  wrongAnswer2: z.string({
    required_error: "Digite uma resposta incorreta",
  }),
  wrongAnswer3: z.string({
    required_error: "Digite uma resposta incorreta",
  }),
  category: z.string({
    required_error: "Selecione uma categoria",
  }).min(1, {
    message: "Selecione uma categoria",
  }),
  difficulty: z.string({
    required_error: "Selecione uma dificuldade",
  }).min(1, {
    message: "Selecione uma dificuldade",
  }),
  name: z.string({
    required_error: "Digite seu nome",
  }),
  githubProfile: z.string({
    required_error: "Digite seu perfil do GitHub",
  }).url({
    message: "Digite um perfil do GitHub válido",
  }),
});

type ContributeFormData = z.infer<typeof contributeSchema>;

export function Contribute() {
  const form = useForm<ContributeFormData>({
    resolver: zodResolver(contributeSchema),
  });

  function onSubmit(data: ContributeFormData) {
    const createObjectToDatabase = {
      question: data.question,
      correctAnswer: data.correctAnswer,
      alternatives: [data.wrongAnswer1, data.wrongAnswer2, data.wrongAnswer3, data.correctAnswer],
      category: data.category,
      difficulty: data.difficulty,
      contributor: data.name,
      createdAt: new Date().toISOString(),
    };
    console.log(createObjectToDatabase);
    
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-4/5 md:w-3/5 md:bg-indigo-50 md:p-12 space-y-4 md:text-indigo-900 rounded-sm"
        >
          <Logo small/>
          <h1 className="text-3xl font-bold tracking-tighter">
            Cadastrar nova questão
          </h1>
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enunciado</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Digite o enunciado da questão"
                    className="bg-indigo-200 text-indigo-950 focus-visible:ring-indigo-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="correctAnswer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alternativa correta</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Alternativa correta"
                    className="bg-indigo-200 text-indigo-950 focus-visible:ring-indigo-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="wrongAnswer1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alternativa errada 1</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Alternativa errada 1"
                    className="bg-indigo-200 text-indigo-950 focus-visible:ring-indigo-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="wrongAnswer2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alternativa errada 2</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Alternativa errada 2"
                    className="bg-indigo-200 text-indigo-950 focus-visible:ring-indigo-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="wrongAnswer3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alternativa errada 3</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Alternativa errada 3"
                    className="bg-indigo-200 text-indigo-950 focus-visible:ring-indigo-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-3/5">
                  <Select onValueChange={field.onChange}>
                    <FormControl className="bg-indigo-800 text-indigo-50">
                      <SelectTrigger>
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <FormMessage />
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
                </FormItem>
              )}
            />
            <FormField
              name="difficulty"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-3/5">
                  <Select onValueChange={field.onChange}>
                    <FormControl className="bg-indigo-800 text-indigo-50">
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Digite seu nome"
                    className="bg-indigo-200 text-indigo-950 focus-visible:ring-indigo-500"
                  />
                </FormControl>
                <FormDescription>
                  Seu nome será exibido como contribuinte da questão.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="githubProfile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Perfil do GitHub</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="https://github.com/"
                    className="bg-indigo-200 text-indigo-950 focus-visible:ring-indigo-500"
                  />
                </FormControl>
                <FormDescription>
                  Seu perfil será exibido como contribuinte da questão.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-indigo-800 self-center w-1/2"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
}
