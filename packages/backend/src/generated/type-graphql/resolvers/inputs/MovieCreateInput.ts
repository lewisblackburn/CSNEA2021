import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutMoviesInput } from "../inputs/PersonCreateNestedOneWithoutMoviesInput";
import { UserCreateNestedOneWithoutMoviesInput } from "../inputs/UserCreateNestedOneWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutMoviesInput;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  actor!: PersonCreateNestedOneWithoutMoviesInput;
}
