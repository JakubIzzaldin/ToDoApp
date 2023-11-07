import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";

import { TodoCardHeader } from "./TodoCardHeader";
import { addTodo, TodoType } from "../Slice";

import { useAppDispatch } from "../../../store";

import { AppTabs, AppTabsProps } from "../../../components/AppTabs/AppTabs";
import { sizes } from "../../../constants/sizes";
import {
  getAllTodosWidgetElements,
  getTodosWidgetElements,
} from "../helpers/getAllTodosWidgetElements";

export type TodoCardProps = {
  allTodos: ({ todoId: string; cardId: string } & TodoType)[];
  title: string;
  cardId: string;
};
export const TodoCard = ({ allTodos, title, cardId }: TodoCardProps) => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useAppDispatch();

  const handleNewTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };
  const handleAddNewTodo = () => {
    dispatch(
      addTodo({ text: newTodo, priority: "none", cardId, isDone: false })
    );
    setNewTodo("");
  };
  const appTabsConfig: AppTabsProps["tabsConfig"] = [
    {
      tabContent: (
        <VStack>{getTodosWidgetElements(allTodos, cardId, "all")}</VStack>
      ),
      tabText: "All",
    },
    {
      tabContent: (
        <VStack>{getTodosWidgetElements(allTodos, cardId, "todo")}</VStack>
      ),
      tabText: "To do",
    },
    {
      tabContent: (
        <VStack>{getTodosWidgetElements(allTodos, cardId, "done")}</VStack>
      ),
      tabText: "Done",
    },
  ];
  return (
    <Card p={"0px"} minWidth={sizes.addCardButtonWidth}>
      <CardHeader p={"8px"} height={"200pxpx"}>
        <TodoCardHeader text={title} cardId={cardId} />
      </CardHeader>

      {getAllTodosWidgetElements(allTodos, cardId) && (
        <CardBody p={0} px={"8px"}>
          <AppTabs tabsConfig={appTabsConfig} />
        </CardBody>
      )}
      <CardFooter p={"8px"}>
        <HStack width={"100%"}>
          <Input
            size={"sm"}
            placeholder={"Add task"}
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <Button
            colorScheme="blue"
            size={"sm"}
            isDisabled={newTodo === ""}
            onClick={handleAddNewTodo}
          >
            Add
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};
