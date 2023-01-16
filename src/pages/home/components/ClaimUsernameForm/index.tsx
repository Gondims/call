import { Button, TextInput, Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
    return (
      <Form as="form">
        <TextInput  prefix="ignite.com/" placeholder="seu-usuário" />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>
    )
  }