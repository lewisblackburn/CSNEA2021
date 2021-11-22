import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  confirmed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  displayname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  location?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  website?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  dob?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
