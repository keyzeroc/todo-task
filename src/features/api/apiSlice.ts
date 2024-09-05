import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TodoType } from '../../types/Todo'

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({
    headers: {
      'Content-Type': 'application/json',
    }, baseUrl: 'https://66d045b2181d059277ddeb2b.mockapi.io/api/v1'
  }),
  endpoints: builder => ({
    getTodos: builder.query<TodoType[], void>({
      query: () => '/todos',
      // providesTags: ['Todos']
      providesTags: result => result
        ? [
          ...result.map(({ id }) => ({ type: 'Todos', id } as const)),
          { type: 'Todos', id: 'LIST' },
        ]
        : [{ type: 'Todos', id: 'LIST' }],
    }),
    addTodo: builder.mutation<TodoType, Partial<TodoType>>({
      query: (todo) => {
        return {
          url: '/todos',
          method: 'POST',
          body: todo,
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    updateTodo: builder.mutation<TodoType, Partial<TodoType>>({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation<TodoType, Partial<TodoType>>({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'DELETE',
        body: todo.id,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Todos', id }],
    }),
  }),
})

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice
