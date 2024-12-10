"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendMessage } from "@/services/discord";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "formValidation.nameMin",
  }),
  email: z.string().email({
    message: "formValidation.emailValid",
  }),
  subject: z.string().optional(),
  message: z.string().min(5, {
    message: "formValidation.messageMin",
  }),
});

export function ContactForm() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      await sendMessage(values);
      form.reset();
      toast({
        title: t("formSuccessTitle"),
        description: t("formSuccessDescription"),
      });
    } catch {
      toast({
        title: t("formErrorTitle"),
        description: t("formErrorDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("formLabels.name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("formLabels.name")} {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.name?.message &&
                  t(form.formState.errors.name.message)}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("formLabels.email")}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t("formLabels.email")}
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.email?.message &&
                  t(form.formState.errors.email.message)}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t("formLabels.subject")}</FormLabel>
              <FormControl>
                <Input placeholder={t("formLabels.subject")} {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.subject?.message &&
                  t(form.formState.errors.subject.message)}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t("formLabels.message")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("formLabels.message")}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.message?.message &&
                  t(form.formState.errors.message.message)}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="md:col-span-2">
          {isSubmitting ? t("formSubmitting") : t("formSubmit")}
        </Button>
      </form>
    </Form>
  );
}
