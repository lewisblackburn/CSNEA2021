import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAvgAggregate } from "../outputs/SongAvgAggregate";
import { SongCountAggregate } from "../outputs/SongCountAggregate";
import { SongMaxAggregate } from "../outputs/SongMaxAggregate";
import { SongMinAggregate } from "../outputs/SongMinAggregate";
import { SongSumAggregate } from "../outputs/SongSumAggregate";

@TypeGraphQL.ObjectType("SongGroupBy", {
  isAbstract: true
})
export class SongGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  poster!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  runtime!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => SongCountAggregate, {
    nullable: true
  })
  _count!: SongCountAggregate | null;

  @TypeGraphQL.Field(_type => SongAvgAggregate, {
    nullable: true
  })
  _avg!: SongAvgAggregate | null;

  @TypeGraphQL.Field(_type => SongSumAggregate, {
    nullable: true
  })
  _sum!: SongSumAggregate | null;

  @TypeGraphQL.Field(_type => SongMinAggregate, {
    nullable: true
  })
  _min!: SongMinAggregate | null;

  @TypeGraphQL.Field(_type => SongMaxAggregate, {
    nullable: true
  })
  _max!: SongMaxAggregate | null;
}
