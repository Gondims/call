import { Form, FormAnnotation } from './styles'
import { TextInput } from "../../../../styles/components"
import { Button, Text } from "../../../../styles/global"
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/router'

const ClaimUsernameFormSchema = z.object({
  username: z
  .string()
  .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
  .regex(/^([a-z\\-]+)$/i, {
    message: 'O usuário pode ter apenas letras e hifens.',
  })
  .transform((username) => username.toLowerCase()),
})

type ClaimUserNameFromData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUserNameFromData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUserNameFromData) {
    const { username } = data

    router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          prefix="gondim.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}