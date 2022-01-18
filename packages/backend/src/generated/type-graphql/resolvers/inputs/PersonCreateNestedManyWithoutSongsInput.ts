import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutSongsInput } from "../inputs/PersonCreateOrConnectWithoutSongsInput";
import { PersonCreateWithoutSongsInput } from "../inputs/PersonCreateWithoutSongsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedManyWithoutSongsInput", {
  isAbstract: true
})
export class PersonCreateNestedManyWithoutSongsInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutSongsInput], {
    nullable: true
  })
  create?: PersonCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;
}
