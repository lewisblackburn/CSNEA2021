import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutUserInput } from "../inputs/BookCreateNestedManyWithoutUserInput";
import { MovieCreateNestedManyWithoutUserInput } from "../inputs/MovieCreateNestedManyWithoutUserInput";
import { SongCreateNestedManyWithoutUserInput } from "../inputs/SongCreateNestedManyWithoutUserInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutFollowingInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dob?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  followers?: UserCreateNestedManyWithoutFollowingInput | undefined;
}
